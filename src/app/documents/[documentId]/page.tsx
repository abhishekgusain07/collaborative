import { Editor } from "./editor";

interface DocumentPageProps {
    params: Promise<{documentId: string}>
}
const DocumentPage = async({params}:DocumentPageProps) => {
    const id = (await params).documentId;
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    )
}

export default DocumentPage;