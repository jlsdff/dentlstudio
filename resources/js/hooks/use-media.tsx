import { Media } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function useMedia() {

    const [images, setImages] = useState<Media[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(null)
    const [isProcessing, setProcessing] = useState(false);

    const getInitialImages = useCallback(async () => {
        fetch('/medias', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setNextUrl(res.next_page_url || null);
                setImages(res.data)
            })
    }, [])

    useEffect(() => {
        getInitialImages()
    }, [])

    const getNextPage = async () => {
        if (!nextUrl) {
            return
        }
        setProcessing(true)
        fetch(`${nextUrl}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setNextUrl(res.next_page_url || null)
                setImages([...images, ...res.data])
            })
            .finally(() => setProcessing(false))
    }

    return { images, nextUrl, isProcessing, getNextPage }
}
