import { DataTableDemo } from "@/components/data-table";
import { baseUrl } from "@/lib/utils";
import { columns } from "./columns";

export default async function LawyersPage() {
  const getLawyers = async () => {
    try {
      const response = await fetch(`${baseUrl}lawyers/?page=0&pageSize=100`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const lawyers = await getLawyers();
  console.log(lawyers);
  const mappedArray = lawyers?.map((item) => {
    const { user, user_id, ...rest } = item; // Destructure user and user_id, and collect the rest
    return { ...rest, ...user }; // Spread the rest and user properties to flatten the user object
  });
  return (
    <main className="w-full">
      <h1 className="font-bold">Lawyers</h1>
      <DataTableDemo
        columns={columns}
        data={mappedArray}
        filterConstraint="fname"
      />
    </main>
  );
}
