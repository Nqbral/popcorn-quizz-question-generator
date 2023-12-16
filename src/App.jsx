import { Route, Routes } from 'react-router-dom';

import ChooseTypeThemeQuestion from './pages/ChooseTypeThemeQuestion';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/choose-type-theme-question"
                    element={<ChooseTypeThemeQuestion />}
                />
            </Routes>
        </div>
    );
}

export default App;
