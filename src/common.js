export default function Common({ message, blockProps }) {
    return (
        <>
            <p {...blockProps}>
                {message}
            </p>
        </>
    );
}
