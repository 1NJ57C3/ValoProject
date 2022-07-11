function PlayerCard({ results }) {
    const { puuid, gameName, tagLine } = results;

    return (
        <div className="player-card">
            User: {gameName}#{tagLine}<br />
            PUUID: {puuid}
        </div>
    )
}

export default PlayerCard;