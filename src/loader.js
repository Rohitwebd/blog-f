// Filename - loader.js

import { TailSpin } from "react-loader-spinner";

export default function Loader() {
	return (
		<TailSpin
			height="80"
			width="80"
			color="#4fa94d"
			ariaLabel="tail-spin-loading"
			radius="1"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	)
}
