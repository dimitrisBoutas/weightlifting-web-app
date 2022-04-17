import {AppShell, MantineProvider, Paper} from "@mantine/core"
import {weightliftingWebAppDarkTheme} from "./theme/WeightliftingWebAppTheme";
import {AppNavigation} from "./components/navigation/AppNavigation";
import {Outlet, ReactLocation, Router} from "@tanstack/react-location";
import {routes} from "./routes/routes";

const location = new ReactLocation()

function WeightliftingWebApp() {

    return (
        <MantineProvider theme={weightliftingWebAppDarkTheme}>
            <Router routes={routes} location={location}>
                <Paper>
                    <AppShell
                        padding="md"
                        navbar={<AppNavigation/>}
                    >
                        <Outlet/>
                    </AppShell>
                </Paper>
            </Router>

        </MantineProvider>
    )
}

export default WeightliftingWebApp
