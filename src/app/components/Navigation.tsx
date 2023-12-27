'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navigation = ({ navLinks }: any) => {
  const pathname  = usePathname()
  return (
    <nav className="bg-slate-50 text-black">
      <ul className="flex gap-4">
        {
          navLinks.map((item: any) => {
            const isActive = pathname.endsWith(item.href)
            return (<li key={item.name}>
              <Link href={item.href}>{item.name} - {isActive ? 'ativo': ''}</Link>
            </li>)
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation;