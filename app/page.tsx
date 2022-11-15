import Image from 'next/image'
import styles from './page.module.css'
import {Piano} from "../components/Piano";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Piano  />
    </div>
  )
}

