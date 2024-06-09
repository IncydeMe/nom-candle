import UserFooter from "@/components/shared/user-footer";
import UserHeader from "@/components/shared/user-header";

export default function UserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <UserHeader />
            <section className="bg-[#FFEDD7] w-screen h-screen overflow-x-hidden">
                <main className="min-h-screen overflow-x-hidden px-20 pt-5">{children}</main>
            </section>
            <UserFooter />
        </body>
      </html>
    );
  }