class User {
    constructor(permission) {
        this.permission = permission;
        this.canEdit = false;
        this.canCreate = false;
    }
}

class Admin {
    constructor(permission) {
        this.permission = permission;
        this.canEdit = true;
        this.canCreate = true;
    }
}

class Moderator {
    constructor(permission) {
        this.permission = permission;
        this.canEdit = true;
        this.canCreate = false;
    }
}

class PermissionFactory {
    // we can use switch case instead of permissions
    static permissions = {
        user: User,
        admin: Admin,
        moderator: Moderator
    }

    create (permission = "user") {
        const Permission = PermissionFactory.permissions[permission];
        const member = new Permission(permission);
        member.log = () => {
            console.log(`That is ${member.permission}. Can edit: ${member.canEdit ? "yes" : "no"}`);
        }
        return member;
    }
}

const factory = new PermissionFactory();

factory.create("admin").log();