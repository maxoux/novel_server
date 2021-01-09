import { Injectable } from '@nestjs/common';
import { SettingsInterface } from './settings.interface';
import { readFileSync, writeFileSync, existsSync } from "fs";

const db_path = __dirname + "/../../db.json";

@Injectable()
export class NovelSettingsService {
    private settings: SettingsInterface[] = [];

    onApplicationBootstrap() {
        console.log(`loading existing db from ${db_path}...`);

        if (!existsSync(db_path)) {
            writeFileSync(db_path, "[]");
            console.log("Base db created");
        }

        var db = readFileSync(db_path, "utf-8");

        console.log("Computing...", db);
        var saved = JSON.parse(db);
        saved.forEach((settings: SettingsInterface) => this.settings.push(settings));
        console.log("DB loaded !");
    }

    info() {
        return {
            status: "running",
            uptime: process.uptime(),
            settings_count: this.settings.length,
        }
    }

    set(key: String, settings: String) {
        var existing = this.find(key);

        if (existing) {
            existing.settings = settings;
            existing.updated_at = new Date();
        }
        else
            this.settings.push({key, settings, updated_at: new Date()});

        this.save();
    }
    
    delete(key: String) {
        var index = this.settings.findIndex((setting: SettingsInterface) => setting.key == key);

        if (index == -1)
            return null;
        
        var res = this.settings.splice(index, 1);
        this.save();
        return res;
    }

    findAll() {
        return this.settings;
    }

    find(key: String) {
        var result = this.settings.find((setting: SettingsInterface) => setting.key == key);
        return result;
    }

    save() {
        writeFileSync(db_path, JSON.stringify(this.settings, null, 4));
    }

    purge() {
        this.settings = [];
        this.save();
        return this.settings;
    }
}
