const BackdropLoading = () => {
    return (
        <div
            className="fixed top-0 left-0 z-999 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
            <div
                className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
            </div>
        </div>
    )
}

export default BackdropLoading