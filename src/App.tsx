import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import {
	decrement,
	increment,
	incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";
import "./index.css";

function App() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	const [input, setInput] = useState<number>(0);

	return (
		<>
			<div className="flex gap-2">
				<button
					className="px-2 border-2 border-slate-500"
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-
				</button>
				<h1>{count}</h1>
				<button
					className="px-2 border-2 border-slate-800"
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
			</div>
			<form
				className="py-4"
				onSubmit={(e) => {
					dispatch(incrementByAmount(input));
					e.preventDefault();
				}}
			>
				<input
					type="number"
					onChange={(e) => setInput(parseInt(e.target.value))}
					value={input}
					className="border-2 border-slate-800"
				/>
			</form>
		</>
	);
}

export default App;
