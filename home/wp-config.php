<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'gfproject_k23rz' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'gfproject_6xx7n' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', '9lv8tcdfm0' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'mysql7019.xserver.jp' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3~TU8zy10JL 4*llw0f0%v2dEV3UyaLZ)j$N,nXPnE(v48R6V=Qy(s1rvb(0gBrs' );
define( 'SECURE_AUTH_KEY',  'sB;fA>D3sS](M$`G7oWQU-UaMJw|n0y&o.V1*-@)&M_rIEkmdt|DU2_}NFro=n x' );
define( 'LOGGED_IN_KEY',    '`Xs+ b-RMg5W5UlBqXbU?>fB]_>Nu:B!+w3B{u_(`bhSv<h:r$Un!pKT(W)( w+i' );
define( 'NONCE_KEY',        'C$H +m@;3Ewz)H!r(gGQr3-z2&ihU;6`YYRO v+R3E{gyFPWm?[=-)wYB?zaz!k.' );
define( 'AUTH_SALT',        'C85pLfu>z+!#OG0`eY.<)~m;?mt~rO_$Rr2mY<0zCu?z<[@8OuE3&7%Vbeu4Uem ' );
define( 'SECURE_AUTH_SALT', 'UfDWpC.<G;:CvhHOq<J/K*Lc_g,Y_$#X C24/ubRDMCLVXcq)hO,YV10+JnQn~zS' );
define( 'LOGGED_IN_SALT',   'y&d:T|BG}W@gF[Ws8ap*pFigW7KG[mZUq~@qzz[&tu>^lbezj&{Vzk;L{^?L!/R*' );
define( 'NONCE_SALT',       '#W4Lt[9B:F<f{]-*mWeA{P&.#z-E&)dyxm0fO(wz<y%3GeD!gQqllqbAKj`HbDjt' );
define( 'WP_CACHE_KEY_SALT','+Y,ptF9unE~fb]CqirV2Y5^?r!vE+Bw&lDNDUv:2bGE+?:=9(:9v?A)QK/w|F$6/' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
