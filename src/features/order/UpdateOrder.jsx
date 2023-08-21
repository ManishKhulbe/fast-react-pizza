import { useFetcher } from "react-router-dom"
import { updateOrder } from "../../services/apiRestaurant"
import Button from "../../ui/Button"

function UpdateOrder({ order }) {
    const fetcher = useFetcher()
    return (
        // it will submit the form and revalidate the page (revalidate means react-router know data has been changed as a result of this below action so whenever it happened it will refetch the data in the background  and then re render the page with that new data )
        <fetcher.Form method="PATCH" className="text-right">
        <Button type={'primary'}>
            Make Priority
        </Button>

        </fetcher.Form>
    )
}

export default UpdateOrder


export async function action({ request, params }) {
    const data = { priority: true }
    await updateOrder(params.orderId, data)
    return null;
}