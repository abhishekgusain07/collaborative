import { Editor } from "./editor";
import { Toolbar } from "./Toolbar";

interface DocumentPageProps {
    params: Promise<{documentId: string}>
}
const DocumentPage = async({params}:DocumentPageProps) => {
    const id = (await params).documentId;
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    )
}

export default DocumentPage;