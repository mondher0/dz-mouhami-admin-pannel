import { DataTableDemo } from "@/components/data-table";
import { baseUrl } from "@/lib/utils";
import { columns } from "./columns";

export default async function UsersPage() {
  const getUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}users/?page=0&pageSize=100`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const users = await getUsers();
  return (
    <main className="w-full">
      <h1 className="font-bold">Lawyers</h1>
      <DataTableDemo columns={columns} data={users} filterConstraint="fname" />
    </main>
  );
}
