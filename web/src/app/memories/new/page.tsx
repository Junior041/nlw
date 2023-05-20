import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function newMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link href={""} className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-50">
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>
      <form action="" className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label htmlFor="midia" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            Anexar Mídia
            <Camera className="w-4 h-4" />
          </label>
          <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            <input type="checkbox" id="isPublic" name="isPublic" value="true"/>
            Tornar Memoria Ativa
          </label>
        </div>
        <input type="file" id="midia" className="invisible" />

      </form>
    </div>
  )
}
