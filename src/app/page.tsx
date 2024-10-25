import { getServerSession } from "next-auth";
import { authOptions } from "./lib/nextAuth";

import ClientComponents from "../_components/ClientComponents";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ClientComponents />
    </div>
  );
}
