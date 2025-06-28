import { useState } from 'react'
import { Editor } from '@tiptap/react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Youtube as YoutubeIcon, XCircle } from 'lucide-react'

interface YouTubeButtonProps {
    editor: Editor;
}

const getYouTubeVideoId = (url: string): string | null => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;

        if (hostname.includes('youtube.com')) {
            return parsedUrl.searchParams.get('v');
        }

        if (hostname.includes('youtu.be')) {
            return parsedUrl.pathname.slice(1);
        }

        return null;
    } catch {
        return null;
    }
}

const isValidYouTubeUrl = (url: string): boolean => {
    return Boolean(getYouTubeVideoId(url));
}

const YouTubeButton = ({ editor }: YouTubeButtonProps) => {
    const [open, setOpen] = useState(false)
    const [url, setUrl] = useState('')

    const applyYouTube = () => {
        const videoId = getYouTubeVideoId(url)

        if (!videoId) return;

        editor
            .chain()
            .focus()
            .setYoutubeVideo({
                src: `https://www.youtube.com/embed/${videoId}`,
                // width: 640,
                // height: 480,
            })
            .run()

        setOpen(false)
        setUrl('')
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                >
                    <YoutubeIcon className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3">
                <div className="flex flex-col gap-2">
                    <Input
                        type="url"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                applyYouTube()
                            }
                        }}
                    />
                    <div className="flex justify-between gap-2">
                        <Button
                            onClick={applyYouTube}
                            disabled={!isValidYouTubeUrl(url)}
                            className="flex-1"
                        >
                            Embed Video
                        </Button>
                        <Button
                            onClick={() => {
                                setUrl('')
                                setOpen(false)
                            }}
                            variant="destructive"
                            size="icon"
                            title="Cancel"
                        >
                            <XCircle className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default YouTubeButton
