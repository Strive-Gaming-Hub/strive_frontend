import { showToast } from "@/app/notifier/toast";
import { api } from "../client";
import axios from "axios";

//function to check the game status and decide whether we are on a new game or a game is already in progress
let gameStatus: "active" | "new_game" | null = null; // Initial game status
export const isActiveMinesGame = async (): Promise<void> => {
  try {
    const response = await api.get("/mines/game-status");
    //the status code will be fetched once the service is available from backend
    const statusCode = response.data.status;

    if (statusCode === 205) {
      //this means that the game is already active
      gameStatus = "active";
    } else if (statusCode === 200) {
      //this means that we can start a new game
      gameStatus = "new_game";
    } else {
      throw new Error(`Unexpected status code: ${statusCode}`);
    }
  } catch (error) {
    console.error("Error checking Mines game status:", error);
    throw new Error("Failed to check Mines game status.");
  }
};

//This function will return the status of the game
export const getMinesGameStatus = (): "active" | "new_game" | null => {
  return gameStatus;
};



//this function will control the PLAY button, if the game is already active
//this will check for the game status
export const handlePlayButtonClick = async () => {
  try {
    //  getMinesGameStatus();

    const gameStatus = getMinesGameStatus();
    if (gameStatus === "new_game") {
      console.log("New game is started");

      // Additional logic to handle new game start
    } else if (gameStatus === "active") {
      throw new Error("Game is already active");
    } else {
      throw new Error("Unknown game status");
    }
  } catch (error: any) {
    console.error("Error handling play button click:", error);
    showToast(error.message || "Failed to start game", "error");
  }
};



export const next_bet = async (tileIndex: number) => {
    try {
      const response = await axios.get(`/api/mines/tile/${tileIndex}`); // Replace with your backend API endpoint
  
      if (response.status === 200) {
        const result = response.data;
  
        if (result.hasMine) {
          showToast("This tile has a mine!", "error");
          // Handle logic for a tile with a mine
        } else if (result.hasDiamond) {
          showToast("Congratulations! You found a diamond!", "success");
          // Handle logic for a tile with a diamond
        } else {
          showToast("No mine or diamond found on this tile.", "info");
          // Handle logic for a tile with neither mine nor diamond
        }
      } else {
        throw new Error("Failed to fetch tile information."); // Handle unexpected response status
      }
    } catch (error) {
      console.error("Error fetching tile information:", error);
      showToast("Failed to fetch tile information.", "error"); // Display error message to the user
    }
  };