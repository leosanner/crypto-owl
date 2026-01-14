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
	pgm.createTable("cmc_currency", {
		id: {
			type: "uuid",
		},
		cmc_id: {
			type: "integer",
		},
		name: {
			type: "varchar(30)",
			notNull: true,
		},
		symbol: {
			type: "varchar(10)",
			notNull: true,
		},
		slug: {
			type: "varchar(15)",
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
