//oproepen van zijn eigen functie


// let amountOfMessages = 0;

// function showMessage() {
//     console.log("Hoi!");

//     amountOfMessages += 1;

//     if(amountOfMessages === 10) return;
//     showMessage();
// }

// showMessage();

//use cases van recurtie
//maken van een menu met submenus, en die hebben weer submenus... tree --> lijst

const menu = [
    {
        name: "Home",
        path: '/home'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]


//oefening

function showMenu() {
    for(const item of menu) {
        console.log(`Name: ${item.name} & Path: ${item.path}`);

        if(item.subpages !== undefined){
            for(const subitem of item.subpages) {
                console.log(`Name: ${subitem.name} & Path: ${subitem.path}`);

                if(subitem.subpages !== undefined) {
                    for(const otherItem of subitem.subpages) {
                        console.log(`Name: ${otherItem.name} & Path: ${otherItem.path}`);
                    }
                }
            }
        }
    }
}

showMenu();


function showMenuWithRecursion(list) {
    for( const item of list) {
        console.log(`Name: ${item.name} & Path: ${item.path}`);

        if(item.subpages) {
            showMenuWithRecursion(item.subpages);
        }
    }
}

showMenuWithRecursion(menu);