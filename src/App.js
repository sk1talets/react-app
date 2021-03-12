import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
	const [theme, setTheme] = useState('red');

	return (
		<ThemeContext.Provider value={{ backgroundColor: theme }}>
			Counter
			<Counter initialCount={0} />
			<br />
			CounterHooks
			<CounterHooks initialCount={0} />
			<br />
			<button onClick={() => setTheme(cur => cur === 'red' ? 'blue' : 'red')}>change theme</button>
		</ThemeContext.Provider>
	);
}
export default App;
