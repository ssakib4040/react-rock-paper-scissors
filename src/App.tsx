import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [tag, setTag] = useState("Are you ready?");
  const [isReady, setIsReady] = useState(true);

  const [playerMove, setPlayerMove] = useState("rock");
  const [computerMove, setComputerMove] = useState("rock");
  const [winner, setWinner] = useState<any>(null);

  const handleMode = (e: string) => {
    if (isReady) {
      setPlayerMove(e);
    }
  };

  useEffect(() => {
    setPlayerName(prompt("Enter your name", "Anonymous") || "Anonymous");
  }, []);

  const handleStart = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    setComputerMove(randomMove);
    setIsReady(false);

    if (playerMove === randomMove) {
      setWinner("draw");
    } else if (
      (playerMove === "rock" && randomMove === "paper") ||
      (playerMove === "paper" && randomMove === "scissors") ||
      (playerMove === "scissors" && randomMove === "rock")
    ) {
      setWinner("computer");
    } else {
      setWinner(playerName);
    }
  };

  const handleReset = () => {
    setPlayerMove("rock");
    setComputerMove("rock");
    setWinner(null);
    setIsReady(true);
  };

  return (
    <Container className="">
      <div className="row">
        <div className="col-md-8 mx-auto py-5 my-5 border border-secondary">
          <h2 className="text-center">React Rock Paper Scissors</h2>

          <p className="text-center">{winner ? `Winner: ${winner}` : tag}</p>

          <div className="d-flex flex-row mb-3">
            <div className="d-flex">
              <img
                src="./rock.png"
                className="img-fluid border border-secondary"
                style={{
                  display: playerMove === "rock" ? "block" : "none",
                }}
              />

              <img
                src="./paper.png"
                alt=""
                className="img-fluid border border-secondary"
                style={{
                  display: playerMove === "paper" ? "block" : "none",
                }}
              />

              <img
                src="./scissors.png"
                alt=""
                className="img-fluid border border-secondary"
                style={{
                  display: playerMove === "scissors" ? "block" : "none",
                }}
              />
            </div>
            <div className="d-flex">
              <img
                src="./rock.png"
                className={`img-fluid img-right border border-secondary`}
                style={{
                  display: computerMove === "rock" ? "block" : "none",
                }}
              />

              <img
                src="./paper.png"
                className={`img-fluid img-right border border-secondary`}
                style={{
                  display: computerMove === "paper" ? "block" : "none",
                }}
              />

              <img
                src="./scissors.png"
                className="img-fluid img-right border border-secondary"
                style={{
                  display: computerMove === "scissors" ? "block" : "none",
                }}
              />

              {/* <img src="./paper.png" className="img-fluid img-right dev" /> */}
              {/* <img src="./scissors.png" className="img-fluid img-right dev" /> */}
            </div>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn btn-dark me-1"
              onClick={() => handleMode("rock")}
            >
              Rock
            </button>
            <button
              className="btn btn-dark me-1"
              onClick={() => handleMode("paper")}
            >
              Paper
            </button>
            <button
              className="btn btn-dark me-1"
              onClick={() => handleMode("scissors")}
            >
              Scissors
            </button>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-dark me-1" onClick={handleStart}>
              Start
            </button>
            <button className="btn btn-dark me-1" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
