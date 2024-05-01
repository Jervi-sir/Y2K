import ThreeScene from "./components/ThreeScene";
import { HeaderComponent } from './HeaderComponent'
export default function Jervi3DPage() {
  return (
    <div style={{ height: '100vh'}}>
      {/* Header */}
      <HeaderComponent />
      {/* Brand */}
      {/* 3D Model */}
      <ThreeScene />
      {/* Card */}
    </div>
  )
}
