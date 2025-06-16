//import type App
import type { App } from "vue";


export default function registerGlobally(app: App) {
    // fetch all vue file from @/components/elements folder
    const components = import.meta.glob("@/components/elements/*.vue", { eager: true });
    for (const path in components) {
        const component = components[path] as any;
        const name = component.default.name as string || getFileName(path);
        app.component(name, component.default);
    }
}

const getFileName = (filePath: string): string =>{
    return filePath.split("/").pop() || "";
}