import React from "react";
import Entry from "./Entry";
import panels from "../emojipedia";

function createEmoji(panel) {
  return (
    <Entry
      key={panel.id}
      emoji={panel.emoji}
      name={panel.name}
      description={panel.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {panels.map(createEmoji)};
        {/* <Entry
          emoji={emo[0].emoji}
          name={emo[0].name}
          description={emo[0].meaning}
        />
        <div className="term">
          <Entry
            emoji={emo[1].emoji}
            name={emo[1].name}
            description={emo[1].meaning}
          />
        </div>
        <div className="term">
          <Entry
            emoji={emo[2].emoji}
            name={emo[2].name}
            description={emo[2].meaning}
          />
        </div> */}
      </dl>
    </div>
  );
}

export default App;
