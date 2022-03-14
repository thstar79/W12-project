'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Games', [
      {title: "Uncharted Waters II / 大航海時代 II", description: "Uncharted Waters II was released in 1993, the second game of the series. It is set primarily in Europe of the 16th century, the time of exploration. Players choose from among 6 different characters, each with their own background.", genre: "RPG", releaseDate: "1995/6/15", createdAt: new Date(), updatedAt: new Date() },
      {title: "Destiny", description: "Destiny is an online-only multiplayer first-person shooter video game developed by Bungie", genre: "FPS", releaseDate: "2014/9/9", createdAt: new Date(), updatedAt: new Date() },
      {title: "Cyberpunk 2077", description: "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt.", genre: "FPS, RPG", releaseDate: "2020/12/10", createdAt: new Date(), updatedAt: new Date() },
      {title: "Borderlands", description: "Borderlands is an action role-playing first-person looter shooter video game franchise set in a space Western science fantasy setting, created by Gearbox Software and published by 2K Games.", genre: "FPS, RPG", releaseDate: "2009/10/20", createdAt: new Date(), updatedAt: new Date() },
      {title: "Borderlands 2", description: "Taking place five years following the events of Borderlands (2009), the game is once again set on the planet of Pandora.", genre: "FPS, RPG", releaseDate: "2012/9/12", createdAt: new Date(), updatedAt: new Date() },
      {title: "Borderlands 3", description: "Borderlands 3 is an action role-playing first-person shooter video game developed by Gearbox Software and published by 2K Games. It is a sequel to 2012's Borderlands 2.", genre: "FPS, RPG", releaseDate: "2019/9/13", createdAt: new Date(), updatedAt: new Date() },
      {title: "Tiny Tina's Assault on Dragon Keep", description: "Tiny Tina's Assault on Dragon Keep is the fourth campaign DLC of Borderlands 2. It was released on June 25th, 2013.", genre: "FPS, RPG", releaseDate: "2013/06/25", createdAt: new Date(), updatedAt: new Date() },
      {title: "Assassin's Creed II", description: "Assassin's Creed II is a 2009 action-adventure video game developed by Ubisoft Montréal and published by Ubisoft.", genre: "Action-adventure", releaseDate: "2009/11/17", createdAt: new Date(), updatedAt: new Date() },
      {title: "Assassin's Creed IV: Black Flag", description: "Assassin's Creed IV: Black Flag is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft.", genre: "Action-adventure", releaseDate: "2013/10/29", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Witcher 3: Wild Hunt", description: "The Witcher 3: Wild Hunt is an action role-playing game developed by Polish developer CD Projekt Red.", genre: "Action role-playing", releaseDate: "2015/05/19", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Elder Scrolls V: Skyrim", description: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios.", genre: "Action role-playing", releaseDate: "2011/11/11", createdAt: new Date(), updatedAt: new Date() },
      {title: "PUBG: Battlegrounds", description: "PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds, or simply PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation.", genre: "Battle royale", releaseDate: "2017/12/20", createdAt: new Date(), updatedAt: new Date() },
      {title: "Rocket League", description: "Rocket League is a vehicular soccer video game developed and published by Psyonix.", genre: "Sports", releaseDate: "2015/07/07", createdAt: new Date(), updatedAt: new Date() },
      {title: "Fallout: New Vegas", description: "Fallout: New Vegas is a 2010 action role-playing game developed by Obsidian Entertainment and published by Bethesda Softworks.", genre: "Action role-playing", releaseDate: "2010/09/19", createdAt: new Date(), updatedAt: new Date() },
      {title: "Valheim", description: "Valheim is an open-world survival game played from a third-person perspective. As fallen Vikings, players must craft tools, build shelters and fight enemies to survive.", genre: "Sandbox, survival", releaseDate: "2021/02/2", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Elder Scrolls IV: Oblivion", description: "The Elder Scrolls IV: Oblivion is an open-world action role-playing video game developed by Bethesda Game Studios.", genre: "Action role-playing", releaseDate: "2006/03/20", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Elder Scrolls III: Morrowind", description: "The Elder Scrolls III: Morrowind is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.", genre: "Action role-playing", releaseDate: "2002/05/01", createdAt: new Date(), updatedAt: new Date() },
      {title: "Final Fantasy VIII", description: "Final Fantasy VIII is a role-playing video game developed and published by Square for the PlayStation console.", genre: "RPG", releaseDate: "1999/02/11", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Legend of Zelda: Ocarina of Time", description: "The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64", genre: "Action-adventure", releaseDate: "1998/11/21", createdAt: new Date(), updatedAt: new Date() },
      {title: "The Legend of Zelda: Breath of the Wild", description: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.", genre: "Action-adventure", releaseDate: "2017/03/03", createdAt: new Date(), updatedAt: new Date() },
      {title: "Left 4 Dead 2", description: "Left 4 Dead 2 is a 2009 first-person shooter game developed and published by Valve", genre: "FPS", releaseDate: "2009/11/17", createdAt: new Date(), updatedAt: new Date() },
      {title: "Red Dead Redemption 2", description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.", genre: "Action-adventure", releaseDate: "2018/09/26", createdAt: new Date(), updatedAt: new Date() },
      {title: "Mortal Kombat", description: "Mortal Kombat is an arcade fighting game developed and published by Midway in 1992.", genre: "Fighting", releaseDate: "1992/09/08", createdAt: new Date(), updatedAt: new Date() },
      {title: "Doom", description: "Doom is a 1993 first-person shooter (FPS) game developed by id Software for MS-DOS.", genre: "FPS", releaseDate: "1993/01/01", createdAt: new Date(), updatedAt: new Date() },
      {title: "DOOM", description: "Doom is a 2016 first-person shooter game REMAKE developed by id Software and published by Bethesda Softworks.", genre: "FPS", releaseDate: "2016/05/13", createdAt: new Date(), updatedAt: new Date() },
      {title: "Elden Ring", description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.", genre: "Action, RPG", releaseDate: "2022/02/24", createdAt: new Date(), updatedAt: new Date() }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});

  }
};
