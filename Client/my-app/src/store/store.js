import { SelectedCoinContext } from "./selectedCoinContext";

export default function Store(props) {
    return (
        <SelectedCoinContext>
            {props.children}
        </SelectedCoinContext>
    )
}