import { Route, Routes } from 'react-router-dom';

import ChooseTypeThemeQuestion from './pages/ChooseTypeThemeQuestion';
import ConsultQuestions from './pages/ConsultQuestions';
import CreateQuestion from './pages/CreateQuestion';
import HomePage from './pages/HomePage';
import ModerateQuestion from './pages/ModerateQuestion';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/choose-type-theme-question"
                    element={<ChooseTypeThemeQuestion />}
                />
                <Route
                    path="/create-question/:theme/:type"
                    element={<CreateQuestion />}
                />
                <Route
                    path="/consult-questions"
                    element={<ConsultQuestions />}
                />
                <Route
                    path="/moderate-question"
                    element={<ModerateQuestion />}
                />
            </Routes>
        </div>
    );
}

export default App;
