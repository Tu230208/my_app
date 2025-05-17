import Image from "next/image";
import styles from "./header.module.css"
import Link from "next/link";
export function Header() {
    return (
        <header className={styles.header}>
        <navbar className={styles.nav}>
          <ul>
          {/* <li><a href="/chitiet">chi tiet san pham </a></li>
            <li><a href="/">Trang chu </a> </li>
            <li>Gioi thieu </li>
           
            <li><a href="/baiviet">baiviet</a></li>
            <li><a href="/lienhe">lienhe</a></li> */}

            
            <li><Link href="/">Home</Link></li>
            <li><Link href="/chitiet">chitietsanpham</Link></li>
            <li><Link href="/gioithieu">gioithieu</Link></li>
            <li><Link href="/lienhe">lienhe</Link></li>
            <li></li>
            <li></li>
          </ul>
        </navbar>
        <div className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        </header>
    )
}