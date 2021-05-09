import Noty from "noty";
import 'noty/lib/noty.css';
import 'noty/lib/themes/sunset.css';

interface INotification {
    title: string;
    description?: string;
}

function getIconForNotification(type: string) {
    if (type === "error") {
        return "fa fa-exclamation-triangle"

    }

    if (type === "product") {
        return "fa fa-cube"
    }

    if (type === "ingredient") {
        return "far fa-lemon"
    }

    return "fa fa-exclamation-circle"

}

function show(type: string, notification: INotification | string, options?: Noty.Options) {

    let title = "";
    let description = "";
    if (typeof notification === "string") {
        title = notification;
    } else {
        title = notification.title;
        description = notification.description || "";
    }
    new Noty({
        callbacks: {
            onTemplate: function () {
                let that = this as any;
                that.barDom.innerHTML = `
                    <div class="notification ${that.options.type}">
                        <i class="${getIconForNotification(that.options.type)}"></i>
                        <div class="details">
                            <p class="title">${title}</p>
                            <p class="description">${description}</p>
                        </div>
                    </div>
                `
            }
        },
        theme: "sunset",
        type,
        timeout: 2000,
        text: typeof notification === "string" ? notification : notification.title,
        progressBar: true,
        ...options,
    } as any).show();
}



function error(notification: INotification | string, options?: Noty.Options) {

    show('error', notification, {
        ...options
    });
}

function ingredient(notification: INotification | string, options?: Noty.Options) {
    show('ingredient', notification, {
        ...options
    });
}

function info(notification: INotification | string, options?: Noty.Options) {
    show('info', notification, {
        ...options
    });
}

function product(notification: INotification | string, options?: Noty.Options) {
    show('product', notification, {
        ...options
    });
}


export {
    error,
    ingredient,
    info,
    product
};