import { deleteData, retrieveData, updateData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await retrieveData("users");
    const data = users.map((user: any) => {
      delete user.password;
      return user;
    });
    res
      .status(200)
      .json({ status: true, statusCode: 200, message: "success", data });
  } else if (req.method === "PUT") {
    const { id, data } = req.body;
    const result = await updateData("users", id, data, (result: boolean) => {
      if (result) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "Gagal" });
      }
    });
  } else if (req.method === "DELETE") {
    const { user }: any = req.query;
    console.log(user);
    const result = await deleteData("users", user[1], (result: boolean) => {
      if (result) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "Gagal" });
      }
    });
  } else {
    res.status(405).json({
      status: false,
      statusCode: 405,
      message: "server error",
      data: null,
    });
  }
}