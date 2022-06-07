/**
 * This plugin adds a given Text and adds it to the end of the text of a sticky note
 * **/

figma.showUI(__html__);


figma.ui.onmessage = async msg => {
    if (msg.type === 'addTag') {
        await figma.loadFontAsync({ family: "Inter", style: "Medium" })
        await figma.loadFontAsync({ family: "Inter", style: "Bold" })

        var selectedStickies = figma.currentPage.selection;

        selectedStickies.forEach(sticky => {
            if (sticky.type === "STICKY") {
                console.log(sticky.text.characters)
                debugger;
                sticky.text.characters +=  '\n\n' + msg.tagContent
            }
        })
    }

    // todo figma.closePlugin();
};
