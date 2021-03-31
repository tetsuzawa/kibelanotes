const TEAM = Deno.env.get("KIBELA_TEAM");
const TOKEN = Deno.env.get("KIBELA_TOKEN");

if (TEAM === undefined) {
    console.log("error: env `KIBELA_TEAM` is not set")
    Deno.exit(1);
}

if (TOKEN === undefined) {
    console.log("error: env `KIBELA_TOKEN` is not set")
    Deno.exit(1);
}

const API_ENDPOINT = `https://${TEAM}.kibe.la/api/v1`;
const USER_AGENT = "kibelanotes";

const query = `
    query {
      currentUser {
        id
        account
        realName
        latestNotes(last: 30) {
          nodes {
            title
            content
          }
        }
      }
    }
`;

const response = await fetch(API_ENDPOINT, {
    method: "POST", // [required]
    redirect: "follow",
    mode: "cors",
    headers: {
        Authorization: `Bearer ${TOKEN}`, // [required]
        "Content-Type": "application/json", // [required]
        Accept: "application/json", // [required]
        "User-Agent": USER_AGENT // [recommended]
    },
    body: JSON.stringify({
        query: query,
        variables: {}
    })
});

if (!response.ok) {
    const body = await response.text();
    throw new Error(`not ok: ${response.statusText}\n${body}`);
}

const body = await response.json();
console.log(JSON.stringify(body, null, 2));
