import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { PageLayout } from "../components/layout/PageLayout";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </PageLayout>
        </BrowserRouter>
    );
}