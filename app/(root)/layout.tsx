import Link from 'next/link';
import { ReactNode } from 'react';
import Image from 'next/image';
import { isAuthenticated } from '@/action/auth_action';
import { redirect } from 'next/navigation';


const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect('/sign-in');
  }

  return (
    <html lang="en">
      <body className="relative">
        <div className="root-layout min-h-screen">
          {/* Navbar */}
          <nav className="p-4 transparent-bg flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={38} height={32} />
              <h2 className="text-primary-100">InterviewIQ</h2>
            </Link>
          </nav>


          {/* Page Content */}
          <main>{children}</main>

          {/* Global Interview Card */}
          
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
