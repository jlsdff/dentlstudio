
import { useEffect, useState } from 'react';
import { Editor } from '@tiptap/react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link as LinkIcon, Unlink } from 'lucide-react';

interface LinkButtonProps {
    editor: Editor;
}

const isValidUrl = (url: string): boolean => {
    if (!url) return false;

    try {
        const parsed = new URL(url.trim());

        if (!['http:', 'https:'].includes(parsed.protocol)) return false;

        return true;
    } catch {
        return false;
    }
};


const LinkButton = ({ editor }: LinkButtonProps) => {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (open && editor.isActive('link')) {
            const previousUrl = editor.getAttributes('link').href || '';
            setUrl(previousUrl);
        }
    }, [open, editor]);

    const applyLink = () => {
        if (!isValidUrl(url)) return;

        editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: url })
            .run();

        setOpen(false);
        setUrl('');
    };

    const removeLink = () => {
        editor.chain().focus().unsetLink().run();
        setOpen(false);
        setUrl('');
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={editor.isActive('link') ? 'default' : 'ghost'}
                    size="sm"
                    className="h-8 px-2"
                >
                    <LinkIcon className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3">
                <div className="flex flex-col gap-2">
                    <Input
                        type="url"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                applyLink();
                            }
                        }}
                    />
                    <div className="flex justify-between gap-2">
                        <Button
                            onClick={applyLink}
                            disabled={!isValidUrl(url)}
                            className="flex-1"
                        >
                            Apply Link
                        </Button>
                        {editor.isActive('link') && (
                            <Button
                                onClick={removeLink}
                                variant="destructive"
                                size="icon"
                                title="Remove Link"
                            >
                                <Unlink className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default LinkButton;

