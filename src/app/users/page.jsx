import { DataTableDemo } from "@/components/data-table";
import { baseUrl } from "@/lib/utils";
import { columns } from "./columns";

export default async function UsersPage() {
  const getUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}users/?page=0&pageSize=100`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoibWFtZXJpbW9uZGhlcjcyOUBnbWFpbC5jb20iLCJyb2xlIjoibGF3eWVyIiwiZXhwIjoxNzY2NDUyNzc1fQ.s3BLyBCdBzHR-xp2mWKt0-v9I71P5-LQfookei2xfoE`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const users = await getUsers();
  console.log(users);
  return (
    <main className="w-full">
      <h1 className="font-bold">Users</h1>
      <DataTableDemo columns={columns} data={users} filterConstraint="fname" />
    </main>
  );
}
