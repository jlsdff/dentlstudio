import { PropsWithChildren } from "react"
import { Toggle } from "../ui/toggle"

interface TiptapToolTogglerProps extends PropsWithChildren {
    isActive: boolean | undefined;
    isDisabled: boolean | undefined;
    onPress: () => void;
}
export default function TiptapToolToggler({
    children,
    isActive,
    isDisabled,
    onPress
}: TiptapToolTogglerProps) {

    const defaultStyles = "p-2 rounded-md cursor-pointer"

    return (
        <Toggle
            className={`${defaultStyles} ${isActive ? "bg-gray-400" : ""}`}
            onPressedChange={() => onPress()}
        >
            {children}
        </Toggle>
    )
}

