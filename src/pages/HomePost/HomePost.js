import { CardPost } from "../../components/CardPost"

export const HomePost = () => {
    return(
        <div className="text-white">
            <div className="mt-6 grid grid-cols-3 gap-4">
                <CardPost />
            </div>
        </div>
    )
}
