import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TitleScreen from "@/pages/TitleScreen";
import PartySelect from "@/pages/PartySelect";
import HistoricalSelect from "@/pages/HistoricalSelect";
import PresidentSetup from "@/pages/PresidentSetup";
import GameScreen from "@/pages/GameScreen";
import GameOver from "@/pages/GameOver";
import Victory from "@/pages/Victory";
import NotFound from "@/pages/not-found";
import { GameProvider } from "@/game/GameContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={TitleScreen} />
      <Route path="/party-select" component={PartySelect} />
      <Route path="/historical-select" component={HistoricalSelect} />
      <Route path="/setup" component={PresidentSetup} />
      <Route path="/game" component={GameScreen} />
      <Route path="/game-over" component={GameOver} />
      <Route path="/victory" component={Victory} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GameProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </GameProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;