type ButtonProps = {
    text?: string; //? opcional.
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || 'Default Text'}</button>
    )
}
