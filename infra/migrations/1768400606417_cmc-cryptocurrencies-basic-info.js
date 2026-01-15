/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
	pgm.createExtension("uuid-ossp", { ifNotExists: true });

	pgm.createTable("cmc_currency", {
		id: {
			type: "uuid",
			primaryKey: true,
			notNull: true,
			default: pgm.func("uuid_generate_v4()"),
		},
		cmc_id: {
			type: "integer",
		},
		name: {
			type: "varchar(70)",
			notNull: true,
		},
		symbol: {
			type: "varchar(30)",
			notNull: true,
		},
		updatedAt: {
			type: "timestamp",
			notNull: true,
			default: pgm.func("current_timestamp"),
		},
		dateAdded: {
			type: "timestamp",
		},
	});
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
