/**
 * This plugin adds a given Text and adds it to the end of the text of a sticky note
 * **/

figma.showUI(__html__);
figma.ui.resize(400, 300);

figma.ui.onmessage = async msg => {
    if (msg.type === 'addTag') {
        await figma.loadFontAsync({family: "Inter", style: "Medium"})
        await figma.loadFontAsync({family: "Inter", style: "Bold"})

        var selectedStickies = figma.currentPage.selection;

        selectedStickies.forEach(sticky => {
            if (sticky.type === "STICKY") {
                sticky.text.characters ? (sticky.text.characters += '\n\n' + msg.tagContent) : (sticky.text.characters += msg.tagContent)
            }
        })
    }

    // todo figma.closePlugin();
};
