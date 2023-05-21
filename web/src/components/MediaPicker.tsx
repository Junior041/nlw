'use client'

import { ChangeEvent, useState } from "react"

export default function MediaPicker() {
    const [preview, setPreview] = useState<String | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target
        if (!files) {
            return
        }
        const previewUrl = URL.createObjectURL(files[0])
        setPreview(previewUrl)
    }
    return (
        <>
            <input
                onChange={onFileSelected}
                type="file"
                id="midia"
                name="coverUrl"
                accept="image/*"
                className="invisible h-0 w-0"
            />
            {preview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview}
                    alt=""
                    className="h-full aspect-video tounded-lg object-cover"
                />
            )}
        </>
    )
}
