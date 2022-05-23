"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7159],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],l={sidebar_label:"CLI",sidebar_position:4},s="AuctionHouse CLI",u={unversionedId:"auction-house/cli",id:"auction-house/cli",title:"AuctionHouse CLI",description:"Prerequisites",source:"@site/docs/auction-house/cli.md",sourceDirName:"auction-house",slug:"/auction-house/cli",permalink:"/auction-house/cli",editUrl:"https://github.com/metaplex/docs/tree/main/docs/auction-house/cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"CLI",sidebar_position:4},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/auction-house/faq"},next:{title:"Roadmap",permalink:"/auction-house/roadmap"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Setup",id:"setup",children:[],level:3},{value:"Running Commands",id:"running-commands",children:[{value:"Help",id:"help",children:[],level:4},{value:"Create",id:"create",children:[],level:4}],level:3},{value:"Show",id:"show",children:[{value:"Fee Account",id:"fee-account",children:[],level:4}],level:3},{value:"Sell",id:"sell",children:[{value:"Require Signoff",id:"require-signoff",children:[],level:4}],level:3},{value:"Buy",id:"buy",children:[],level:3},{value:"Execute Sale",id:"execute-sale",children:[],level:3},{value:"Other Actions",id:"other-actions",children:[],level:3}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auctionhouse-cli"},"AuctionHouse CLI"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ts-node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"In order to get started with the AuctionHouse CLI please follow these steps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/metaplex-foundation/metaplex.git\ncd metaplex\n")),(0,i.kt)("p",null,"Note: By default you will be using the latest code on the tip of the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch.  If instead you want to use a specific release, you check it out now (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout v1.1.1"),")."),(0,i.kt)("p",null,"Then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd js && yarn install && yarn bootstrap\ncd packages/cli\n")),(0,i.kt)("p",null,"Once you have cloned the repo and installed packages, make sure you have a local ",(0,i.kt)("inlineCode",{parentName:"p"},"Keypair")," setup. If you need help with that see these guides."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"https://docs.solana.com/cli/install-solana-cli-tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/wallet-guide/file-system-wallet"},"https://docs.solana.com/wallet-guide/file-system-wallet"))),(0,i.kt)("h3",{id:"running-commands"},"Running Commands"),(0,i.kt)("p",null,"To run commands you will use\n",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node src/ts-node src/auction-house-cli.ts")),(0,i.kt)("h4",{id:"help"},"Help"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/ts-node src/auction-house-cli.ts\nUsage: auction-house-cli [options] [command]\n\nOptions:\n-V, --version                     output the version number\n-h, --help                        display help for command\n\nCommands:\nshow_escrow [options]\nwithdraw [options]\nsell [options]\nwithdraw_from_treasury [options]\nwithdraw_from_fees [options]\ncancel [options]\nexecute_sale [options]\nbuy [options]\ndeposit [options]\nshow [options]\ncreate_auction_house [options]\nupdate_auction_house [options]\nhelp [command]                    display help for command\n\n")),(0,i.kt)("h4",{id:"create"},"Create"),(0,i.kt)("p",null,"Creates an Auction House"),(0,i.kt)("p",null,"See the command help with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts help create_auction_house\n")),(0,i.kt)("p",null,"Find your current Keypair, lets say it lives at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/mywallet.key")," or on windows ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\windowsuser\\mywallet.key"),". To create an Auction house you will run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts create_auction_house --keypair ~/mywallet.key -e devnet -sfbp 1000 -ccsp false -rso false\n")),(0,i.kt)("p",null,"In this case we dont need to require signoff because we want to make a fully decentralized auctionhouse. Since we did not specify ",(0,i.kt)("inlineCode",{parentName:"p"},"-tm, --treasury-mint <string>")," The currency for payment will be SOL.\nAlso the options below will default to being set as the public key of ",(0,i.kt)("inlineCode",{parentName:"p"},"~/mywallet.key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-twd, --treasury-withdrawal-destination <string>\n-fwd, --fee-withdrawal-destination <string>\n")),(0,i.kt)("p",null,"IF all goes well you will see"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wallet public key: Gsv13oph2i6nkJvNkVfuzkcbHWchz6viUtEg2vsxQMtM\nNo treasury withdrawal dest detected, using keypair\nNo fee withdrawal dest detected, using keypair\nNo treasury mint detected, using SOL.\nCreated auction house HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS <--- Your auction house key will be different\n")),(0,i.kt)("p",null,"Save this key ",(0,i.kt)("inlineCode",{parentName:"p"},"HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS")," since it is the public key of the solana account that holds your AuctionHouse. In all subsequent commands you will pass this key with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-ah")," option."),(0,i.kt)("h3",{id:"show"},"Show"),(0,i.kt)("p",null,"Prints the balances of the fee and treasury wallets configured for the auction house and its current settings options."),(0,i.kt)("p",null,"See the command help with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts help show\n")),(0,i.kt)("p",null,"Notice I switched ",(0,i.kt)("inlineCode",{parentName:"p"},"--keypair")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"-k")," this is shorthand but works just the same."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts show -k ~/mywallet.key -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS\n")),(0,i.kt)("p",null,"The output will differ but similar to the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No treasury mint detected, using SOL.\n-----\nAuction House: HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS\nMint: So11111111111111111111111111111111111111112\nAuthority: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nCreator: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nFee Payer Acct: AcWpR41NPMq73FZUspCiXxoLrJnW7zytgHKY5xqtETkU\nTreasury Acct: HFW5CY73qN3XK3qEP7ZFxbpBBkQtipPfPQzaDj3mbbY1\nFee Payer Withdrawal Acct: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nTreasury Withdrawal Acct: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nFee Payer Bal: 0\nTreasury Bal: 0\nSeller Fee Basis Points: 1000\nRequires Sign Off: false\nCan Change Sale Price: false\nAH Bump: 255\nAH Fee Bump: 252\nAH Treasury Bump: 254\n")),(0,i.kt)("h4",{id:"fee-account"},"Fee Account"),(0,i.kt)("p",null,"In the above Show command you see a Fee Payer account.\nThis account can be used to pay the fees on chain for sales execution, transfers and account creation. For this excercise we will teach you how to fund that account by aridropping some SOL on devnet. Your Auction House fee account is used only when the Auction House authority is signing the transaction. This is usually only in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Requires Sign Off")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ solana airdrop 2 AcWpR41NPMq73FZUspCiXxoLrJnW7zytgHKY5xqtETkU\nRequesting airdrop of 2 SOL\nSignature: 4qYFoD8GN6TZLDjLsqyyt6mhjYEjwKF36LJCDLtL88nTD3y3bFzXmVFHP6Nczf5Dn4GnmBJYtbqV9tN2WbsYynpX\n2 SOL\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"solana airdrop")," command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at ",(0,i.kt)("a",{parentName:"p",href:"https://solfaucet.com"},"https://solfaucet.com"),"."))),(0,i.kt)("h3",{id:"sell"},"Sell"),(0,i.kt)("p",null,"Place and NFT UP for sale."),(0,i.kt)("p",null,"See the command help with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts help sell\n")),(0,i.kt)("p",null,"Place an NFT for sale by its mint address with the auction house for 1 SOL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts sell \\\n  -k ~/mywallet.key \\\n  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \\\n  --buy-price 1 \\\n  --mint F7fejo7cT1fRyJxj1W2aWy3aeJz8iqLU9YvbBAzwJGh2 \\\n  --token-size 1\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wallet public key: CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB\nwallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nSet 1 F7fejo7cT1fRyJxj1W2aWy3aeJz8iqLU9YvbBAzwJGh2 for sale for 1 from your account with Auction House Ee53kiwLVw5XG98gSLNHoQRi4J22XEhz3zsKYY2ttsb7\n")),(0,i.kt)("h4",{id:"require-signoff"},"Require Signoff"),(0,i.kt)("p",null,"If the auction house is setup to require sign off its wallet, as well as the seller are provided to the command.\nDo this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-ak")," option."),(0,i.kt)("p",null,"See the command help with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts help sell\n")),(0,i.kt)("p",null,"In a production scenerio where the keypair for the auction house is stored on a sever managed by the organization hosting the auction house the transaction should be partial signed by the seller from the client then passed to the server for signing by the auction house before submitting to Solana."),(0,i.kt)("h3",{id:"buy"},"Buy"),(0,i.kt)("p",null,"Place an offer on an NFT by its mint address at some price in SOL when using native SOL as the mint."),(0,i.kt)("p",null,"See the command help with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts help buy\n")),(0,i.kt)("p",null,"The buy command is an offer on the NFT and will not result in a sale until the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute_sale")," action is triggered. This command offers 2 SOL for the NFT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node src/auction-house-cli.ts buy \\\n  -k ~/mywallet.key \\\n  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \\\n  --buy-price 2 \\\n  --token-size 1 \\\n  --mint 7v8kcqCHLih31bp2xwMojGWTMdrcFfzZsYXNbiLiRYgE\nwallet public key: 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak\nwallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nMade offer for  2\n")),(0,i.kt)("h3",{id:"execute-sale"},"Execute Sale"),(0,i.kt)("p",null,"Sell an NFT to a buyer at the price set by the seller.  Note that this currently requires the auction house authority, the buyer, or the seller to be the fee payer and thus sign the transaction."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a future version of the AuctionHouse, this action will become ",(0,i.kt)("inlineCode",{parentName:"p"},"permissionless"),", meaning anyone will be able to call this instruction with two matching (price must match) orders (bid/sell). This will allow your UI to execute the sale once an order matches on the client side or have a backend process or bot finish the process."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/auction-house-cli.ts execute_sale\n  -k ~/mywallet.key \\\n  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \\\n  --buy-price 2 \\\n  --mint DCqt9QQ3ot3qv53EhWrYAWFuh4XgSvFJvLRjgsDnhLTp \\\n  --buyer-wallet 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak \\\n  --seller-wallet CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB \\\n  --token-size 1\nwallet public key: CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB\nwallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3\nAccepted 1 DCqt9QQ3ot3qv53EhWrYAWFuh4XgSvFJvLRjgsDnhLTp sale from wallet CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB to 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak for 2 from your account with Auction House HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS\n")),(0,i.kt)("h3",{id:"other-actions"},"Other Actions"),(0,i.kt)("p",null,"Other actions are documented in the CLI and can be found using the ",(0,i.kt)("inlineCode",{parentName:"p"},"help")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<command> help")," subcommand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Cancel")," - Potential buyer revokes their offer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Show Escrow")," - Print out the balance of an auction house escrow account for a given wallet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Withdraw")," - Transfer funds from user's buyer escrow account for the auction house to their wallet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Deposit")," - Add funds to user's buyer escrow account for the auction house.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Withdraw from Fee")," - Transfer funds from auction house fee wallet to the auction house authority.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Widthraw from Treasury")," - Transfer funds from the auction house treasury wallet to the auction house authority.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Update Auction House")," - Update any of the auction house settings including it's authority or seller fee."))))}h.isMDXComponent=!0}}]);