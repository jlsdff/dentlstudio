// src/extensions/ImageComponent.tsx
import React, { useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { X, Upload, ExternalLink } from 'lucide-react'

const ImageComponent = ({ node, updateAttributes, deleteNode }: any) => {

    const [isEditing, setIsEditing] = useState(!node.attrs.src)
    const [imageUrl, setImageUrl] = useState(node.attrs.src || '')
    const [altText, setAltText] = useState(node.attrs.alt || '')
    const [isLoading, setIsLoading] = useState(false)

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        setIsLoading(true)
        const reader = new FileReader()

        reader.onload = (e) => {
            const result = e.target?.result as string
            setImageUrl(result)
            setIsLoading(false)
        }

        reader.onerror = () => {
            setIsLoading(false)
            alert('Error reading file')
        }

        reader.readAsDataURL(file)
    }

    const handleSave = () => {
        if (!imageUrl.trim()) {
            deleteNode()
            return
        }

        updateAttributes({
            src: imageUrl,
            alt: altText,
        })

        setIsEditing(false)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleDelete = () => {
        deleteNode()
    }

    if (isEditing) {
        return (
            <NodeViewWrapper className="image-component">
                <Card className="p-4 my-4 max-w-md">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Upload Image
                            </label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    disabled={isLoading}
                                    className="flex-1"
                                />
                                <Upload className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>

                        <div className="text-center text-gray-500">or</div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Image URL
                            </label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    disabled={isLoading}
                                    className="flex-1"
                                />
                                <ExternalLink className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Alt Text (optional)
                            </label>
                            <Input
                                type="text"
                                placeholder="Describe the image"
                                value={altText}
                                onChange={(e) => setAltText(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        {imageUrl && (
                            <div className="border rounded-lg overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={altText || 'Preview'}
                                    className="w-full h-32 object-cover"
                                />
                            </div>
                        )}

                        <div className="flex gap-2 justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => deleteNode()}
                                disabled={isLoading}
                            >
                                Cancel
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleSave}
                                disabled={isLoading || !imageUrl.trim()}
                            >
                                {isLoading ? 'Loading...' : 'Add Image'}
                            </Button>
                        </div>
                    </div>
                </Card>
            </NodeViewWrapper>
        )
    }

    return (
        <NodeViewWrapper className="image-component">
            <div className="relative group my-4">
                <img
                    src={node.attrs.src}
                    alt={node.attrs.alt || ''}
                    title={node.attrs.title || ''}
                    className="max-w-full h-auto rounded-lg shadow-sm"
                    style={{
                        width: node.attrs.width || 'auto',
                        height: node.attrs.height || 'auto',
                    }}
                />

                {/* Overlay controls */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleEdit}
                        className="h-8 w-8 p-0"
                    >
                        <Upload className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                        className="h-8 w-8 p-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Alt text caption */}
                {node.attrs.alt && (
                    <div className="text-sm text-gray-600 mt-2 text-center italic">
                        {node.attrs.alt}
                    </div>
                )}
            </div>
        </NodeViewWrapper>
    )
}

export default ImageComponent
