interface DocumentPageProps {
    params: Promise<{documentId: string}>
}
const DocumentPage = async({params}:DocumentPageProps) => {
    const id = (await params).documentId;
    return (
        <div>
            document: {id}
        </div>
    )
}

export default DocumentPage;