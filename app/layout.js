import './globals.css'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-primary'>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
